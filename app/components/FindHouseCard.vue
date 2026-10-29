<template>
<v-row no-gutters class="pa-10 w-100">
  <v-card
    class="search-card mx-auto"
    max-width="1112"
    rounded="lg"
    elevation="0"
    @keyup.enter="search"
  >
    <div class="card-inner">
      <p class="eyebrow">Properties</p>
      <h2 class="search-title">Find Your Dream Home</h2>

      <!-- Row 1 -->
      <v-row class="mt-4">
        <v-col cols="12" md="4">
          <label class="field-label" for="f-location">Location</label>
          <v-select
            id="f-location"
            v-model="filters.location"
            :items="locations"
            item-title="title"
            item-value="value"
            variant="outlined"
            density="comfortable"
            color="accent"
            hide-details
            aria-label="Location"
          />
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <label class="field-label" for="f-type">Type</label>
          <v-select
            id="f-type"
            v-model="filters.type"
            :items="types"
            variant="outlined"
            density="comfortable"
            color="accent"
            hide-details
            aria-label="Type"
          />
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <label class="field-label" for="f-sort">Sort By</label>
          <v-select
            id="f-sort"
            v-model="filters.sortBy"
            :items="sortOptions"
            item-title="title"
            item-value="value"
            variant="outlined"
            density="comfortable"
            color="accent"
            hide-details
            aria-label="Sort by"
          />
        </v-col>
      </v-row>

      <!-- Row 2 -->
      <v-row align="end">
        <v-col cols="6" sm="3" md="2">
          <label class="field-label" for="f-beds">Bedrooms</label>
          <v-select
            id="f-beds"
            v-model="filters.bedrooms"
            :items="counts"
            variant="outlined"
            density="comfortable"
            color="accent"
            hide-details
            aria-label="Bedrooms"
          />
        </v-col>

        <v-col cols="6" sm="3" md="2">
          <label class="field-label" for="f-baths">Baths</label>
          <v-select
            id="f-baths"
            v-model="filters.baths"
            :items="counts"
            variant="outlined"
            density="comfortable"
            color="accent"
            hide-details
            aria-label="Baths"
          />
        </v-col>

        <v-col cols="6" sm="3" md="2">
          <label class="field-label" for="f-min">Min Price</label>
          <v-text-field
            id="f-min"
            v-model.number="filters.minPrice"
            type="number"
            min="0"
            variant="outlined"
            density="comfortable"
            color="accent"
            prefix="$"
            placeholder="No min"
            hide-details
            aria-label="Minimum price"
          />
        </v-col>

        <v-col cols="6" sm="3" md="2">
          <label class="field-label" for="f-max">Max Price</label>
          <v-text-field
            id="f-max"
            v-model.number="filters.maxPrice"
            type="number"
            min="0"
            variant="outlined"
            density="comfortable"
            color="accent"
            prefix="$"
            placeholder="No max"
            hide-details
            aria-label="Maximum price"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-btn
            block
            rounded="pill"
            height="48"
            class="search-btn"
            prepend-icon="mdi-magnify"
            @click="search"
          >
            Search Now
          </v-btn>
        </v-col>
      </v-row>

      <div class="d-flex justify-end mt-2">
        <v-btn variant="text" size="small" class="clear-btn" @click="reset">
          Clear filters
        </v-btn>
      </div>
    </div>
  </v-card>
</v-row>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cinzel&family=Source+Sans+3:wght@400;600&display=swap',
    },
  ],
})

const emit = defineEmits<{
  (e: 'search', filters: Record<string, unknown>): void
}>()

const defaults = () => ({
  location: '',
  type: 'Any',
  sortBy: 'newest',
  bedrooms: 'Any',
  baths: 'Any',
  minPrice: null as number | null,
  maxPrice: null as number | null,
})

const filters = reactive(defaults())

const reset = () => Object.assign(filters, defaults())

const search = () => {
  if (
    filters.minPrice != null &&
    filters.maxPrice != null &&
    filters.minPrice > filters.maxPrice
  ) {
    ;[filters.minPrice, filters.maxPrice] = [filters.maxPrice, filters.minPrice]
  }

  emit('search', { ...filters })
  console.log('Search filters:', { ...filters })
}

const locations = [
  { title: 'Any', value: '' },
  { title: 'Alamo', value: 'alamo' },
  { title: 'Alton', value: 'alton' },
  { title: 'Amargosa Valley', value: 'amargosa-valley' },
  { title: 'Beatty', value: 'beatty' },
  { title: 'Beryl', value: 'beryl' },
  { title: 'Blue Diamond', value: 'blue-diamond' },
  { title: 'Boulder City', value: 'boulder-city' },
  { title: 'Brian Head', value: 'brian-head' },
  { title: 'Cal Nev Ari', value: 'cal-nev-ari' },
  { title: 'Caliente', value: 'caliente' },
  { title: 'Cedar City', value: 'cedar-city' },
  { title: 'Cold Creek', value: 'cold-creek' },
  { title: 'Crystal', value: 'crystal' },
  { title: 'Duck Creek Village', value: 'duck-creek-village' },
  { title: 'Dyer', value: 'dyer' },
  { title: 'Elko', value: 'elko' },
  { title: 'Ely', value: 'ely' },
  { title: 'Goldfield', value: 'goldfield' },
  { title: 'Goodsprings', value: 'goodsprings' },
  { title: 'Moapa', value: 'moapa' },
  { title: 'Mount Charleston', value: 'mount-charleston' },
  { title: 'Mountain Springs', value: 'mountain-springs' },
  { title: 'Nelson', value: 'nelson' },
  { title: 'North Las Vegas', value: 'north-las-vegas' },
  { title: 'Other', value: 'other-1' },
  { title: 'Other', value: 'other-2' },
  { title: 'Other', value: 'other-3' },
  { title: 'Other', value: 'other-4' },
  { title: 'Other', value: 'other-5' },
  { title: 'Overton', value: 'overton' },
  { title: 'Pahrump', value: 'pahrump' },
  { title: 'Palm Gardens', value: 'palm-gardens' },
  { title: 'Panaca', value: 'panaca' },
  { title: 'Parowan', value: 'parowan' },
  { title: 'Pioche', value: 'pioche' },
  { title: 'Ruth', value: 'ruth' },
  { title: 'Sandy Valley', value: 'sandy-valley' },
  { title: 'Searchlight', value: 'searchlight' },
  { title: 'Tonopah', value: 'tonopah' },
]

const types = ['Any', 'House', 'Condo', 'Land', 'Commercial']

const sortOptions = [
  { title: 'Newest', value: 'newest' },
  { title: 'Price: Low to High', value: 'price-asc' },
  { title: 'Price: High to Low', value: 'price-desc' },
]

const counts = ['Any', '1+', '2+', '3+', '4+', '5+']
</script>

<style scoped>
.search-card {
  --accent: #d9a79f;
  --accent-strong: #e8bdb5;
  --field-border: rgba(255, 255, 255, 0.22);

  position: relative;
  z-index: 2;
  background: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  font-family: 'Source Sans 3', sans-serif;
}

.card-inner {
  padding: 40px;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.search-title {
  margin: 0;
  font-family: 'Cinzel', serif;
  font-variant: small-caps;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 1.1;
  color: var(--accent);
}

.field-label {
  display: block;
  margin-bottom: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
}

/* Fields */
.search-card :deep(.v-field) {
  font-family: 'Source Sans 3', sans-serif;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  --v-field-border-opacity: 0.25;
}
.search-card :deep(.v-field:hover) {
  background: rgba(255, 255, 255, 0.07);
}
.search-card :deep(.v-field--focused) {
  background: rgba(255, 255, 255, 0.08);
}
.search-card :deep(.v-field__input) {
  color: #fff;
}
.search-card :deep(input::placeholder) {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
}
.search-card :deep(.v-field__append-inner .v-icon) {
  color: rgba(255, 255, 255, 0.7);
}

/* Buttons */
.search-btn {
  background: var(--accent) !important;
  color: #1c1c1c !important;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s ease, transform 0.2s ease;
}
.search-btn:hover {
  background: var(--accent-strong) !important;
  transform: translateY(-1px);
}

.clear-btn {
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
  text-transform: none;
}
.clear-btn:hover {
  color: #fff;
}

@media (max-width: 600px) {
  .card-inner {
    padding: 24px;
  }
  .search-title {
    font-size: 1.8rem;
  }
  .search-card {
    margin-top: -40px;
  }
}
</style>